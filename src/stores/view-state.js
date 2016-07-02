import { action, observable } from 'mobx';


class ViewState {
  @observable title;

  @action setTitle = (title) => {
    this.title = title;
  }
}

export default new ViewState();
