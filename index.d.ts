declare global {
  interface BatteryManager {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    //   onchargingchange: null;
    //   onchargingtimechange: null;
    //   ondischargingtimechange: null;
    //   onlevelchange: null;
  }
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

export {};
