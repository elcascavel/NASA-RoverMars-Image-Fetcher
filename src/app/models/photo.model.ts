import { Camera } from './camera.model'
import { Rover } from './rover.model'

export class Photo 
{
    public photo: Object;
    public showDetails: boolean = false;
    public sol: number;
    public camera: Camera;
    public rover: Rover;
}