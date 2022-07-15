# Autotask on OpenZeppelin Defender

#### 1. Preparation
- Sign up for an OpenZeppelin Defender account from: https://defender.openzeppelin.com/
- Set the Relayer address as **Operator** in the target smart contract.
- Sign up for a Polygonscan account from: https://polygonscan.com/register
- Acquire a Polygonscan API key

#### 2. Create a Relayer
- On OpenZeppelin Defender dashboard, go to Relay on the left panel and click **Create Relayer** button
- Give your relayer a name, then select the target network from the **Network** dropdown list (Polygon or Mumbai), then click **Create**
![image](https://user-images.githubusercontent.com/100549206/179154811-609ecd74-a342-4213-9add-21c0aa47fb51.png)

- On the next screen, copy the **_secret key_** and store it in a safe place.
- Copy the Relayer address and set it as **Operator** in the target smart contract.
![image](https://user-images.githubusercontent.com/100549206/179154834-5d5ba108-665e-412e-a218-0d7e72ef5ae9.png)
- Fund the Relayer with MATIC


#### 3. Create an Autotask
- Go to Autotask on the left panel and click **Create Autotask**
- On the next screen, give the autotask a name, select **Schedule** trigger, and select **Timespan** for Schedule.
- Set execution frequency to a desired number of minute, hour, or day.
- From the **Connect to a Relayer** dropdown list, select the relayer that was created on the previous step.
![image](https://user-images.githubusercontent.com/100549206/179154877-c0bfb3eb-1d69-4ee1-9a68-fc883a343fe1.png)
- Copy the autotask code from */src/Autotask.js* and paste to **Code**. 
![image](https://user-images.githubusercontent.com/100549206/179154983-4a288fb2-7d18-4e01-935f-b145408bd4de.png)

- Update **_proxy_** and **_apiKey_** with your smart contract address and Polygon API key
```
const proxy = "Your contract address";
const apiKey = "Your block explorer API key (polygon)";
```
- Click Create to finish creating the Autotask.
