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
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent() {
                    this.home = "Home";
                    this.about = "About";
                    this.contact = "Contact Us";
                }
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'nav',
                        template: "<ul>\n<li>{{home}}</li>\n<li>{{about}}</li>\n<li>{{contact}}</li>\n</ul>\n" }), 
                    __metadata('design:paramtypes', [])
                ], NavComponent);
                return NavComponent;
            })();
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.js.map