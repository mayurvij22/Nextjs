import mongoose, { model, models, Schema } from "mongoose";


export const VIDEO_DIMENSIONS = {
  width: 1280,  // Default width    
    height: 1920, // Default height  
} as const;



export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?:{
    width?: number;
    height?: number;
    quality?: string;
  }
}   


const videoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
      trim: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    transformation: {
      width: { type: Number, default: VIDEO_DIMENSIONS.width },
      height: { type: Number, default: VIDEO_DIMENSIONS.height },
      quality: { type: String, default: "auto" },
    }
  },
  {
    timestamps: true,
  }
);  

const Video = models.Video || model<IVideo>('Video', videoSchema);  

export default Video;