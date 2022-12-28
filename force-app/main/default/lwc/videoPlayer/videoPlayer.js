import { LightningElement, api } from 'lwc';
import getFieldValue from '@salesforce/apex/VideoPlayerController.getFieldValue';

export default class VideoPlayer extends LightningElement {

    //Inputs
    @api recordId;
    @api objectApiName;
    @api fieldName;

    width;
    height;

    _videoUrl;
    rendered = false;

    get videoUrl() {
        return this._videoUrl;
    }
    noVideo = false;

    getValue() {
        getFieldValue({
            recordId : this.recordId,
            objectApiName : this.objectApiName,
            fieldName : this.fieldName
        })
        .then((result) => {
            if(typeof result != "undefined" && result != null && result != '') {
                this._videoUrl = result;
            } else {
                this.noVideo = true;
            }
        })  
        .catch((error) => {
            console.log(error.message);
        });
    }

    connectedCallback() {
        this.getValue();

    }

    renderedCallback() {
        if(!this.rendered) {
            let container = this.template.querySelector('[data-id="video-container"]');
            if(container != null) {
                this.width = container.getBoundingClientRect().width;
                this.height = this.width*9/16;
                this.rendered = true;
            }
        }
    }

}