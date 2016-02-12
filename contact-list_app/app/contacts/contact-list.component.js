System.register(['angular2/core', './contact.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_component_1;
    var ContactListcomponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            ContactListcomponent = (function () {
                function ContactListcomponent() {
                    this.seldetails = { fname: "Taha1", lname: "khan1", phone: 090078601, email: "taha_khan198923@yahoo.com1" };
                    this.contacts = [
                        { fname: "Taha1", lname: "khan1", phone: 090078601, email: "taha_khan198923@yahoo.com1" },
                        { fname: "Taha2", lname: "khan2", phone: 090078601, email: "taha_khan198923@yahoo.com2" },
                        { fname: "Taha3", lname: "khan3", phone: 090078601, email: "taha_khan198923@yahoo.com3" },
                        { fname: "Taha4", lname: "khan4", phone: 090078601, email: "taha_khan198923@yahoo.com4" }
                    ];
                }
                ContactListcomponent.prototype.selected = function (selected) {
                    // this.show=true;
                    //    alert(selected.fname);
                    this.seldetails = selected;
                };
                ContactListcomponent = __decorate([
                    core_1.Component({
                        selector: 'contact-List',
                        template: "\n<h1>Hello</h1>\n<ul *ngFor=\"#contact of contacts\">\n    <li (click)=\"selected(contact)\">First Name:{{contact.fname}} {{contact.lname}}</li>\n</ul>\n<contact [contact]=\"seldetails\"></contact>\n",
                        directives: [contact_component_1.Contactcomponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactListcomponent);
                return ContactListcomponent;
            })();
            exports_1("ContactListcomponent", ContactListcomponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map