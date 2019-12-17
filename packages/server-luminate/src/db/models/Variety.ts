import mongoose from 'mongoose'

const Variety = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    background: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('variety', Variety, 'varieties')
