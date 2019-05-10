import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = "Home | PAW";
  pontos = [
    {
      "title": "arena corinthians",
      "local": "São paulo",
      "img": "https://lh5.googleusercontent.com/p/AF1QipN0BnlXGWEJS3uUVLEPKnbNog5sRYS6SNhSMLhG=w284-h160-k-no",
      "like": 0,
      "deslike": 0
    },
    {
      "title": "Al-kaida",
      "local": "Paulistana",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4VxwDgniMwuM8tvNeAea8uN0TxZeq33h3FQSTm5NqAZUcvMi",
      "like": 0,
      "deslike": 0
    }
  ];
like(ponto) {
  ponto.like = ponto.like + 1

}

dislike(ponto) {
  ponto.dislike = ponto.dislike + 1
}
}

