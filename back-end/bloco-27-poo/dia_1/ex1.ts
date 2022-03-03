class Students {
  enroll: string;
  name: string;
  testNote: number[];
  testWork: number[];
  constructor(enroll: string, name: string, testNote: number[], testWork: number[]) {
    this.enroll = enroll;
    this.name = name;
    this.testNote = testNote;
    this.testWork = testWork;
  }

  sumNotes = () => {
    const totalNotesTest = this.testNote.reduce((prev, curr) => prev + curr);
    const totalNotesWork = this.testWork.reduce((prev, curr) => prev + curr);
    return totalNotesTest + totalNotesWork;
  }

  averageNotes = () => {
    const totalNotesTest = this.testNote.reduce((prev, curr) => prev + curr);
    const totalNotesWork = this.testWork.reduce((prev, curr) => prev + curr);
    const totalAllNotes = totalNotesTest + totalNotesWork;
    return totalAllNotes / 6;
  }

}