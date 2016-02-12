System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.country = "";
                    this.name = "Reha";
                    this.dt = (new Date()).toString();
                    this.names = [' Ari ', ' Carlos', ' Felipe', ' Nate'];
                    this.persons = [{ name: ' Ari1 ' }, { name: ' Ari2 ' }];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div>\n        \n        {{dt}}\n        <br />\n        {{name}}\n        <br>\n        \n        <ul>\n            <li *ngFor=\"#n of names\" >\n                \n                Name : <b>{{n}}</b>\n            \n            </li>\n        </ul>\n        \n        <ul>\n            <li *ngFor=\"#n of persons\" >{{n | json}} {{n.name}}\n            </li>\n        </ul>\n        \n        <br>\n        <br>\n        \n        \n        <input type=\"text\" [(ngModel)]=\"name\" />\n        {{country}}\n        \n        <input type=\"text\" [(ngModel)]=\"state\" />\n        {{state}}\n        \n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map