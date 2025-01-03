import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  id: string;
  name: string;
  description: string;
  images: string[];
  githubLink: string;
  liveDemoLink?: string;
}

const ProjectSchema: Schema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
    },
    githubLink: {
      type: String,
      required: [true, 'GitHub link is required'],
      trim: true,
    },
    liveDemoLink: {
      type: String,
      trim: true,
      required: [false, 'live demo link is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    images: {
      type: [String],
      required: [false, 'At least one image is required'],
    },
  },
  {
    timestamps: true,
  }
);

// Ensure indexing for faster search
ProjectSchema.index({ name: 'text', description: 'text' });

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
