import axios from 'axios'
import { Upload } from 'tabler-icons-react'
import { useState } from 'react'
import { Loader } from '@mantine/core'

const BUCKET_URL = 'https://limitss-v1.s3.ap-southeast-1.amazonaws.com/'
type Props = {
    setUrl?: (url: string) => void
}
export default function Uploader({ setUrl }: Props) {
    const [file, setFile] = useState<any>()
    const [uploadingStatus, setUploadingStatus] = useState<any>()
    const [_uploadedFile, setUploadedFile] = useState<any>()

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const uploadFile = async () => {
        setUploadingStatus('Uploading...')

        let { data } = await axios.post('/api/upload', {
            name: file.name,
            type: file.type,
        })

        const url = data.url
        const fileUrl = data.fileUrl



        await axios.put(url, file, {
            headers: {
                'Content-type': file.type,
                'Access-Control-Allow-Origin': '*',
            },
        })

        setUploadedFile(BUCKET_URL + file.name)
        setUrl && setUrl(fileUrl)
        setUploadingStatus('Uploaded!')
        setFile(null)
        console.log(fileUrl)
    }
    const uploading = uploadingStatus === 'Uploading...'
    const uploaded = uploadingStatus === 'Uploaded!'
    type uploadUiProps = {
        uploaded: boolean
    }

    function UploadUi({ uploaded }: uploadUiProps): JSX.Element {
        return (
            <>
                {uploaded && (
                    <div className="alert-success alert w-60">
                        <span>Uploaded successfully</span>
                    </div>
                )}
                <div className="upload-btn-wrapper">
                    <input
                        type="file"
                        id="upload"
                        onChange={(e) => {
                            selectFile(e)
                            setUploadingStatus('')
                        }}
                        hidden
                    />
                    <label htmlFor="upload" className="btn">
                        {file ? 'Change File' : 'Select a file'}
                    </label>
                </div>
                {file && (
                    <div className="flex flex-col gap-2 items-center">
                        <button
                            onClick={uploadFile}
                            className=" btn flex flex-row items-center justify-center gap-2"
                        >
                            <Upload size="25"  />
                            Upload {file.name}
                        </button>
                    </div>
                )}
            </>
        )
    }
    return (
        <div className="flex flex-col gap-2 items-center p-2 justify-center">
            {uploaded ? (
                <>
                    <UploadUi uploaded={true} />
                </>
            ) : uploading ? (
                <>
                    <Loader />
                    <span>Uploading</span>
                </>
            ) : (
                <>
                    <UploadUi uploaded={false} />
                </>
            )}
        </div>
    )
}
