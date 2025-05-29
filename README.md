An advanced, real-time **IoT Relay Management System**, built using **Next.js, Supabase, MQTT, and ShadCN UI**, inheriting core concepts from a previous **Django-based project**.  

## 📌 Features  
✅ **User Authentication & Management** (Supabase Auth)  
✅ **Multiple Shops Ownership** (Each user can own multiple shops)  
✅ **IoT Relay Device Control** (Relay devices & relay channels linked to users)  
✅ **Customizable Relay Channels** (Users can rename channels via `display_name`)  
✅ **Real-time MQTT Integration** (Live updates for relay status)  
✅ **Admin Panel for Device Management**  

## 📚 Inherited from Django Project  
This system **evolves from a Django-based IoT project**, where:  
🔹 **Relay Devices & Channels** were first managed using Django models.  
🔹 **User authentication** was handled via Django’s built-in `auth.User`.  
🔹 **Admin users** could add relay devices and auto-generate channels via Django Views.  
Now, we've transitioned to **Next.js + Supabase**, making everything more scalable and dynamic! 🚀  

## 🛠️ Tech Stack  
- **Frontend:** Next.js (React) + TailwindCSS  
- **Backend:** Supabase (PostgreSQL)  
- **Realtime:** MQTT for live relay control  
- **UI:** ShadCN components for sleek interfaces  

## 🔧 Setup Instructions  
### 1️⃣ Install Dependencies  
```bash
npm install
```

### 2️⃣ Configure Environment Variables  
Create a `.env.local` file in the root directory and add the required environment variables. For example:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
MQTT_BROKER_URL=your-mqtt-broker-url
```
> Replace the values with your actual credentials.

### 3️⃣ Run the Development Server  
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### 4️⃣ Build for Production  
```bash
npm run build
npm start
```