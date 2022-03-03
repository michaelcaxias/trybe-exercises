import * as methods from './helpers';

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

  maxLength = 6;
  
  sumNotes = () => {
    const { testNote, testWork } = this;
    const totalNotes = methods.sumArrays(testNote, testWork)
    return totalNotes;
  }

  averageNotes = () => {
    const { testNote, testWork } = this;
    const totalNotes = methods.sumArrays(testNote, testWork)
    return totalNotes / this.maxLength;
  }
}

const studentMichael = new Students(
  'm2425h0a2c',
  'Michael Caxias',
  [9, 8.5, 10, 7],
  [8, 10]
  );

console.log('Average: ', studentMichael.averageNotes())
console.log('Sum: ', studentMichael.sumNotes())