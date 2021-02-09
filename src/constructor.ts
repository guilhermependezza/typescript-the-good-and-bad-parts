type FormConfig = {
  formClass: string
}

class Form {
  private formElement: HTMLFormElement;

  constructor(config: FormConfig) {
    this.formElement = document.querySelector(config.formClass)! as HTMLFormElement;
    // mais configurações
  }

  // configure(config: FormConfig) {
  //   this.formElement = document.querySelector(config.formClass)! as HTMLFormElement;
  // }
}