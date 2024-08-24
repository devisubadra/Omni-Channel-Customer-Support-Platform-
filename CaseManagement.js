import { LightningElement, track } from 'lwc';
import createCaseRecord from '@salesforce/apex/CaseManagementController.createCaseRecord';
import getCases from '@salesforce/apex/CaseManagementController.getCases';

export default class CaseManagement extends LightningElement {
    @track caseSubject = '';
    @track casePriority = '';
    @track cases;
    columns = [
        { label: 'Subject', fieldName: 'Subject' },
        { label: 'Priority', fieldName: 'Priority' },
        { label: 'Status', fieldName: 'Status' }
    ];

    handleSubjectChange(event) {
        this.caseSubject = event.target.value;
    }

    handlePriorityChange(event) {
        this.casePriority = event.target.value;
    }

    createCase() {
        createCaseRecord({ subject: this.caseSubject, priority: this.casePriority })
            .then(() => {
                this.caseSubject = '';
                this.casePriority = '';
                return getCases();
            })
            .then(result => {
                this.cases = result;
            })
            .catch(error => {
                console.error('Error creating case', error);
            });
    }

    connectedCallback() {
        getCases()
            .then(result => {
                this.cases = result;
            })
            .catch(error => {
                console.error('Error fetching cases', error);
            });
    }
}
