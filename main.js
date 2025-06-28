const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const headSlot = self.armor[10];  // Vanity head
    const bodySlot = self.armor[11];  // Vanity body
    const legSlot = self.armor[12];   // Vanity legs

    const safe = (item) => item && item.type !== 0;

    // Add defense from vanity
    if (safe(headSlot)) self.statDefense += headSlot.defense;
    if (safe(bodySlot)) self.statDefense += bodySlot.defense;
    if (safe(legSlot))  self.statDefense += legSlot.defense;

    // Call UpdateEquip to apply other stats like melee speed, damage, crit, etc.
    if (safe(headSlot) && typeof headSlot.UpdateEquip === "function") headSlot.UpdateEquip(self);
    if (safe(bodySlot) && typeof bodySlot.UpdateEquip === "function") bodySlot.UpdateEquip(self);
    if (safe(legSlot) && typeof legSlot.UpdateEquip === "function")  legSlot.UpdateEquip(self);
});
