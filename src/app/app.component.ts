import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'In the Mountains',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Lake',
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];
}
