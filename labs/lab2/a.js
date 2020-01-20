function constructor(props) {
    super(props);
    this.state = {
        formErrors: {
            ignoreInvalid: false,
            extras: false,
            proteins: false
        }
    };
}