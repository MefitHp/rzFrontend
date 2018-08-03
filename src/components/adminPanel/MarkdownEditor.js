import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import { Toolbar, ToolbarGroup, RaisedButton } from 'material-ui';

class MarkdownEditor extends Component{
    render(){
        const {editMarkdown, body, onChangeBody, onSaveBody} = this.props

        return(
            <div style={{paddingTop:50}}>
                <Toolbar
                    style={{display:'flex', justifyContent:'flex-end'}}
                >
                    <ToolbarGroup
                        
                    >
                        <RaisedButton
                            primary
                            onClick={editMarkdown}
                            label="Cancelar"
                        />
                        <RaisedButton
                            secondary
                            onClick={onSaveBody}
                            label="Guardar"
                        />

                        
                    </ToolbarGroup>
                </Toolbar>
                <div className="desc-container">

                    <div
                        className={"desc-editor "}

                    >
                       <textarea
                        style={{cursor:'text'}}
                           id="Select1"
                           name="body"
                           value={body}
                           onChange={onChangeBody} cols="30" rows="10">
                
                       </textarea>
                    </div>
                     <br/>
                    <div
                        id="Select2"
                        className={"mark desc-preview "}>
                        <ReactMarkdown
                            source={body} />
                    </div>


                </div>
            </div>

        )
    }
}

export default MarkdownEditor