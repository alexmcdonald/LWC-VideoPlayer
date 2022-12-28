public class VideoPlayerController {
    
    @AuraEnabled(cacheable=true)
    public static String getFieldValue(String recordId, String objectApiName, String fieldName) {

        String response;
        
        if(recordId != null && objectApiName != null && fieldName != null) {
            String query = 'SELECT ' + fieldName + ' FROM '+ objectApiName +' WHERE Id=\''+recordId+'\'';
            SObject obj = Database.query(query);
            response = (String) obj.get(fieldName);
        }        
        
		return response;        
    }

}