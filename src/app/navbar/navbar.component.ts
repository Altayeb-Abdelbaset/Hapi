import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

declare var $: any;

var Angora_Options = {
  scrollSpeed: 700,
  navigation: 'sticky',
  zoomControlDiv: null
};
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
(function () {
  if (Angora_Options.navigation === 'sticky') {
    $(window).on("scroll", function () {
      var pos = $(window).scrollTop();
      if (pos >= 100) {
        $(".navbar").addClass("floating");
        $(".up-arrow").removeClass("d-none");
      } else {
        $(".navbar").removeClass("floating ");
        $(".navbar").addClass("navbar-dark");
        $(".up-arrow").addClass("d-none");
      }
    });
  }
  else {
    $('.navbar').addClass('fixed-top');
  }
})();


