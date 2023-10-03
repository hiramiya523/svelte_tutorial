export default class User{

  #name;

  /**
   * @param {string} name
   */
  constructor(name){
    if(typeof name !== "string"){
      throw new Error('User name must be a string');
    }
    this.#name = name;
  }

  /**
   * @returns {string} name
  */
  get name(){
    return this.#name;
  }
}