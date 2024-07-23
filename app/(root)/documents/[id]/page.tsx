import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'

const Document = () => {
  return (
    <div>
        <Header>
            <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>Untitled</p>
            </div>
        </Header>

        <Editor />
    </div>
  )
}

export default Document