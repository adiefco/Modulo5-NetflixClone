import { Component, OnInit } from '@angular/core';
import { AppService, UserMoviesInfo, Movies} from '../app.service';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularId: number[] = []
  keepWatchingId: number[] = []
  id: number = 1

  headerBackground: string = ''
  headerTitle: string = ''
  headerDescription: string = ''

  loading: boolean = false

  userId: number = 0
  hidden: boolean = true

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header-change');
    } else {
      element.classList.remove('header-change');
    }
  }

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.userId = this.route.snapshot.params["id"]
    this.loadPage(this.userId)
    this.createHeader(this.userId)
  }

  loadPage(userId: number) {
    this.appService.getUser(userId).subscribe((resp: UserMoviesInfo) => {
      const { popular, keepWatching } = resp;
      this.popularId = popular;
      this.keepWatchingId = keepWatching;
    })
  }

  createHeader(id: number) {
    this.appService.getMovies(id).subscribe((resp: Movies) => {
      this.headerBackground = resp.backgroundImage;
      this.headerTitle = resp.titleImage;
      this.headerDescription = resp.description;
      this.loading = false;
    })
  }

  showModal(id: number) {
    this.id = id;
    this.hidden = false
  }

  hideModal() {
    this.hidden = true
  }
}
