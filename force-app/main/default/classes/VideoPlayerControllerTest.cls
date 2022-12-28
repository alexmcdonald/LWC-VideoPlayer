@isTest
public class VideoPlayerControllerTest {

    @isTest public static void testController() {
        Account testAccount = new Account();
        testAccount.Name = 'Test Account';
        insert(testAccount);
        
        Test.startTest();
        String testFieldValue = VideoPlayerController.getFieldValue(testAccount.Id, 'Account', 'Name');
        Test.stopTest();
        
        System.assertEquals(testAccount.Name, testFieldValue);
        
    }
    
}