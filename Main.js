const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");

Player.Update.hook((original, self, i) => {
    original(self, i);
    const headSlot = self.armor[10];  // Vanity head
    const bodySlot = self.armor[11];  // Vanity body
    const legSlot = self.armor[12];   // Vanity legs

    self.statDefense += (headSlot.defense + bodySlot.defense + legSlot.defense +15); 
});
