import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'a[href]'
})
export class AnchorClickDirective {
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    const href = this.el.nativeElement.hash;
    if (href.indexOf('#') === -1) {
      return;
    }
    if (this.el.nativeElement.attributes['data-toggle'] && this.el.nativeElement.attributes['data-toggle'].length) {
      return;
    }

    const anchorId = href.substring(href.indexOf('#'), href.length);
    if (document.querySelector(anchorId)) {
      this.anchorClickHandler(anchorId);
      return false;
    }
  }

  anchorClickHandler(anchorId) {
    const section = document.querySelector(anchorId);
    const header = document.querySelector('.header');
    const offsetTop = section.offsetTop - header.clientHeight,
      $nav = [].slice.call(document.querySelectorAll('.navigation-link[href*="#"]'));

    // 這裡是可以不使用 Jquery 來處理，指是這樣子弄比較快
    $('body, html').animate(
      {
        scrollTop: offsetTop
      },
      450,
      () => {
        if (history.pushState) {
          history.pushState(null, null, anchorId);
        } else {
          window.location.hash = anchorId;
        }

        $nav.forEach(x => this.renderer2.removeClass(x, 'active'));
        this.renderer2.addClass(this.el.nativeElement, 'active');
      }
    );
  }

  constructor(private el: ElementRef, private renderer2: Renderer2) {}
}
