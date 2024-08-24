public with sharing class ExportData {
    @AuraEnabled
    public static String exportCaseData() {
        List<Case> cases = [SELECT Id, Subject, Priority, Status, CreatedDate FROM Case];
        String csvData = 'CaseID,Subject,Priority,Status,CreatedDate\n';
        for (Case c : cases) {
            csvData += String.format('{0},{1},{2},{3},{4}\n', new String[]{c.Id, c.Subject, c.Priority, c.Status, c.CreatedDate});
        }
        return csvData;
    }
}
