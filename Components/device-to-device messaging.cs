using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;

public class FcmService
{
    private static FirebaseApp firebaseApp;

    public static void InitializeFirebaseApp()
    {
        var credentials = GoogleCredential.FromFile("path/to/serviceAccountKey.json");
        firebaseApp = FirebaseApp.Create(new AppOptions()
        {
            Credential = credentials,
        });
    }

    public static void SendToDevice(string deviceToken, string title, string body)
    {
        var message = new Message()
        {
            Token = deviceToken,
            Notification = new Notification()
            {
                Title = title,
                Body = body
            }
        };

        var messaging = FirebaseMessaging.DefaultInstance;
        messaging.SendAsync(message);
    }
}
