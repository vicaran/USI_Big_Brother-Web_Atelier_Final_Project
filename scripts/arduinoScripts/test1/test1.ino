int ledPin = 13;
int lightPin = 0;
int soundPin = 1;
int tempPin = 2;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
//  digitalWrite(ledPin, HIGH);
//  Serial.print("Light: ");
//  Serial.println(analogRead(lightPin));
//  Serial.print("Volume: ");
//  Serial.println(analogRead(soundPin));
//  delay(300);
//  digitalWrite(ledPin, LOW);
int reading = analogRead(tempPin);  
 // converting that reading to voltage, for 3.3v arduino use 3.3
 float voltage = reading * 5.0;
 voltage /= 1024.0; 
 
 // now print out the temperature
 float temperatureC = (voltage - 0.5) * 100 ;  //converting from 10 mv per degree wit 500 mV offset
                                               //to degrees ((voltage - 500mV) times 100)
 Serial.print(temperatureC); Serial.println(" degrees C");
 delay(1000);
  // put your main code here, to run repeatedly:

}
