import {FiEdit} from 'react-icons/fi'
import { MdDone } from 'react-icons/md'
const DataListContainer = ({data, menu}) => {

    

  return (
    <div className='DataListContainer'>
        <div className={menu ? 'inner-DataListContainer list' : 'inner-DataListContainer tiles'}>
            {
                data ? data.map((elm, i)=>{
                    return(
                        <div contentEditable={true} key={i} className='DataCard'>
                            <FiEdit className='edit_DataCard' />
                            <MdDone title='Submit' className='donenote' />
                        {elm.title}
                        </div>
                    )
                }) : <>
                    <h1>Nothing Found</h1>
                </>
            }
        </div>
    </div>
  )
}

export default DataListContainer