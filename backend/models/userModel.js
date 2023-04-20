const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  teamOfUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userTeam',
    default: null,
  },
})

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error('נא למלא את כל השדות')
  }
  if (!validator.isEmail(email)) {
    throw Error('  אימייל לא תקין, נא למלא מחדש')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('נא למלא את כל השדות')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('אימייל לא תקין')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('סיסמא לא נכונה ')
  }

  return user
}

module.exports = mongoose.model('userFantasy', userSchema)
