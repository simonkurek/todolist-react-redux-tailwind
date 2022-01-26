// export default class Task {
//   static instances: number = 0;
//   private _id: number;
//   private _text: string;

//   constructor(text: string) {
//     this._id = Task.instances;
//     this._text = text;
//     Task.instances++;
//   }

//   get id(): number {
//     return this._id;
//   }
//   get text(): string {
//     return this._text;
//   }
// }

export default interface ITask {
  id: number;
  text: string;
}
