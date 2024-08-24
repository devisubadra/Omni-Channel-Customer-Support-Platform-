public with sharing class CaseManagementController {
    @AuraEnabled
    public static Case createCaseRecord(String subject, String priority) {
        Case newCase = new Case(Subject = subject, Priority = priority, Status = 'New');
        insert newCase;
        return newCase;
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCases() {
        return [SELECT Id, Subject, Priority, Status FROM Case];
    }
}
