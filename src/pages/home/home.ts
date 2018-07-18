import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFirestoreCollection } from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

interface Post {
  Url: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ngOnInit(){
    this.postsCol = this.afs.collection('users/alovelace/liveFeed');
    this.posts = this.postsCol.valueChanges();
  }

}
