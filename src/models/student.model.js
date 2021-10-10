const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: 'Thừa Thiên Huế',
  },
  born: {
    type: String,
    required: true,
  },
});

async function getAllStudent() {
  const allStudent = await this.find();
  return allStudent;
}

async function getStudentById(id) {
  const studentId = mongoose.Types.ObjectId(id);
  const student = await this.findOne({ _id: studentId });
  return student;
}

async function createNewStudent(data) {
  const validUser = await this.findOne({ name: data.name });
  if (validUser) {
    throw new Error('Existed name!');
  }

  const student = await this.create(data);
  return student;
}

async function updateStudent(data) {
  const id = mongoose.Types.ObjectId(data._id);
  const options = {
    new: true,
    useFindAndModify: false,
  };
  const updatedStudent = this.findOneAndUpdate(
    { _id: id, name: data.name },
    options
  );
  return updatedStudent;
}

async function deleteStudentById(id) {
  const _id = mongoose.Types.ObjectId(id);
  const deletedStudent = this.findOneAndDelete({ _id: _id });
  return deletedStudent;
}

module.exports = mongoose.model('Student', studentSchema);
module.exports.createNewStudent = createNewStudent;
module.exports.getAllStudent = getAllStudent;
module.exports.updateStudent = updateStudent;
module.exports.deleteStudentById = deleteStudentById;
module.exports.getStudentById = getStudentById;
