import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
@Component({
    selector:'authors',
    template:`
    <h2>Authors</h2>
    <ul>
    <li *ngFor="#author of authors">{{author}}</li>
    </ul>
    `,
    providers:[AuthorService]
})
export class AuthorComponent{
    authors:string[];
    title="Title for autor page";
    constructor(authorService:AuthorService){
        this.authors = authorService.getAuthors();
    }
}