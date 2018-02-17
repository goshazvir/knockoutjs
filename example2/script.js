var userFormModel = function() {
        this.firstName      = ko.observable('');
        this.lastName       = ko.observable('');
        this.fullName       = ko.computed(function () {
            return this.firstName() + ' ' + this.lastName();
        }, this);
        this.age            = ko.observable('');
        this.sex            = ko.observable('');
        this.sexOptions     = ['Male', 'Female'];
        this.isAdmin        = ko.observable(false);
        this.adminName      = ko.observable('');

        this.notEmpty       = ko.computed(function () {
            return !!this.age() || !!this.sex() || !!this.firstName() || !!this.lastName() || !!this.isAdmin()
        }, this);

        this._formWithData   = ko.computed(function () {
            return this.firstName() && this.lastName() && this.age() && this.sex();
        }, this);

        this.reset          = function() {
            this.firstName('');
            this.lastName('');
            this.age(null);
            this.sex(null);
            this.adminName('');
            this.isAdmin(false);
        };

        this.save           = function() {
            event.preventDefault();

            if ( this._formWithData() ) {
                alert("User Save!");
            } else {
                alert("Enter Data");
            }
        };
    };

ko.applyBindings( new userFormModel() );
