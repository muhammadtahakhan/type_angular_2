import { Component } from "angular2/core" ;

@Component({
    selector: 'reddit-article',
        host: {
            class: 'row'
        },
        inputs: [ 'article' ],
    template: `
        <div class="four wide column center aligned votes" >
 <div class="ui statistic" >
 <div class="value" >
 {{ article.votes }}
 </div>
 <div class="label" >
 Points
 </div>
 </div>
 </div>
 <div class="twelve wide column" >
 <a class="ui large header" href=" {{ article.link }} " >
 {{ article.title }}<br>
 {{ article.link }}
 </a>
 <ul class="ui big horizontal list voters" >
 <li class="item" >
 <a  (click) ="voteUp() " >
 <i class="arrow up icon" > </i>
 upvote
 </a>
 </li>
 <li class="item" >
 <a  (click) ="voteDown() " >
 <i class="arrow down icon" > </i>
 downvote
 </a>
 </li>
 </ul>
 </div>
 `
 })
 export class ArticleComponent {
    article;
    
    constructor() {
        
        //this. article = new Article( 'Angular 2' , 'http://angular.io' , 10);
    }
    
    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
 }
