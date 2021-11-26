import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string | null): string | null {
    if (poster) {
      return `https://image.tmdb.org/t/p/w500${ poster }`; // Original Link: https://image.tmdb.org/t/p/w500{{ movie.poster_path }}
    }
    // this => "src/assets/no-image.jpg" is the same that "./assets/no-image.jpg"
    // ./ == src/
    poster = `./assets/no-image.jpg`;
    // console.log(poster);
    return poster || null;
  }

}
