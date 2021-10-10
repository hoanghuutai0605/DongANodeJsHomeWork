const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    numberStudent: {
        type: Number,
        default: 0
    },
});


async function getAllClass () {
    const allClass = await this.find();
    return allClass;
}

async function getClassById (id) {
    const classId = mongoose.Types.ObjectId(id);
    const Class = await this.findOne({_id: classId});
    return Class;
}

async function createNewClass (data) {
    const validUser = await this.findOne({name: data.name});
    if (validUser) {
        throw new Error("Existed name!");
    }

    const Class = await this.create(data);
    return Class;
}

async function updateClass (data) {
    const id = mongoose.Types.ObjectId(data._id);
    const options = {
      new : true,
      useFindAndModify: false
    }
    const updatedClass = this.findOneAndUpdate({_id: id, name: data.name}, options);
    return updatedClass;
}

async function deleteClassById (id) {
    const _id = mongoose.Types.ObjectId(id);
    const deletedClass = this.findOneAndDelete({_id: _id});
    return deletedClass;
}

module.exports = mongoose.model('Class', classSchema);
module.exports.createNewClass = createNewClass;
module.exports.getAllClass = getAllClass;
module.exports.updateClass = updateClass;
module.exports.deleteClassById = deleteClassById;
module.exports.getClassById = getClassById;

