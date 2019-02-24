import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {
  slides = [
    {
      title: "",
      details: "",
      action: "",
      image: "/assets/img/banner/rewards.jpg"
    },
    {
      title: "",
      details: "",
      action: "",
      image: "/assets/img/banner/salesspec.jpg"
    },
    {
      title: "",
      details: "",
      action: "",
      image: "/assets/img/banner/retention.jpg"
    }
  ]
}
