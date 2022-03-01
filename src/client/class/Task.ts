export default class Task {
  private _id: number;
  private _text: string;
  private _isCompleted: boolean;

  constructor(id: number, text: string, isCompleted: boolean) {
    this._id = id;
    this._text = text;
    this._isCompleted = isCompleted;
  }

  get id(): number {
    return this._id;
  }

  get text(): string {
    return this._text;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }
}
