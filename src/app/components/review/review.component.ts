import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  config: any = {
    uiColor: '#99000',
    height: '350px',
    // toolbar:
    // [
    //     [ 'Source', '-', 'Bold', 'Italic' ]
    // ]
    font_names: 'Verdana'
  };
  onChange = event => console.log('change');
  onEditorChange = event => console.log('editorChange');
  onReady = event => console.log('ready');
  onFocus = event => console.log('focus');
  onBlur = event => console.log('blur');
  onContentDom = event => console.log('contentDom');
  onFileUploadRequest = event => console.log('fileUploadRequest');
  onFileUploadResponse = event => console.log('fileUploadResponse');
  onPaste = event => console.log('paste');
  onDrop = event => console.log('drop');
  onSelectionChange = event => console.log(event, 'onSelectionChange');
  onKey = event => console.log(event, 'onKey');

  editorContent = `<p>Social networking sites, for instance Facebook, are thought by some to have had a detrimental effect on individual people as well as society and local communities. However, in my opinion, while I believe that such sites are mainly beneficial to the individual, I agree that they have had a damaging effect on local communities.</p>
  <p>With regards to individuals, the impact that online social media has had on each individual person has clear advantages. Firstly, people from different countries are brought together through such sites as Facebook whereas before the development of technology and social networking sites, people rarely had the chance to meet or communicate with anyone outside of their immediate circle or community. Secondly, Facebook also has social groups which offer individuals a chance to meet and participate in discussions with people who share common interests.</p>
  <p>On the other hand, the effect that Facebook and other social networking sites have had on societies and local communities can only be seen as negative. Rather than individual people taking part in their local community, they are instead choosing to take more interest in people online. Consequently, the people within local communities are no longer forming close or supportive relationships. Furthermore, society as a whole is becoming increasingly disjointed and fragmented as people spend more time online with people they have never met face to face and who they are unlikely to ever meet in the future.</p>
  <p>To conclude, although social networking sites have brought individuals closer together, they have not had the same effect on society or local communities. Local communities should do more to try and involve local people in local activities  in order to promote the future of community life.</p>
  `;
}
