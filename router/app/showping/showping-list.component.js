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
    var ShowpingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShowpingComponent = (function () {
                function ShowpingComponent() {
                    this.showpinglistitms = [
                        { 'name': 'milk' },
                        { 'name': 'suger' },
                        { 'name': "buns" }
                    ];
                    this.selecteditem = { 'name': '' };
                }
                ShowpingComponent.prototype.onitemclick = function (item) {
                    // alert(item);
                    this.selecteditem = item;
                };
                ShowpingComponent.prototype.additem = function (aditem) {
                    this.showpinglistitms.push({ name: aditem.value });
                };
                ShowpingComponent.prototype.delete = function (item) {
                    this.showpinglistitms.splice(this.showpinglistitms.indexOf(item), 1);
                    // alert(item.name)
                    //   this.showpinglistitms.splice(0)
                };
                ShowpingComponent = __decorate([
                    core_1.Component({
                        selector: 'showping-list',
                        template: "\n    <ul *ngFor=\"#item of showpinglistitms \">\n    <li (click)=\"onitemclick(item)\">{{item.name}}</li>\n    <button (click)=\"delete(item)\">Delete</button>\n    </ul>\n    <input teype=\"text\" [(ngModel)]=\"selecteditem.name\" />\n    <input teype=\"text\" #aditem />\n    <button (click)=\"additem(aditem)\">Add item</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShowpingComponent);
                return ShowpingComponent;
            })();
            exports_1("ShowpingComponent", ShowpingComponent);
        }
    }
});
//# sourceMappingURL=showping-list.component.js.map