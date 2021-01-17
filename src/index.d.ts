import * as React from 'react'

export interface CropperProps {
  image: string | File
  onDragStop: () => void
  onChange: () => void
  cropperRef: React.ElementRef
  pointSize: number
  lineWidth: number
  pointColor: string
  lineColor: string
  maxWidth: number
  maxHeight: number
}

const Cropper: React.FC<CropperProps>

export default Cropper
