const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const headSlot = self.armor[10];  // Vanity head
    const bodySlot = self.armor[11];  // Vanity body
    const legSlot = self.armor[12];   // Vanity legs

    const safe = (item) => item && item.type !== 0;

    // Apply defense manually from vanity slots
    if (safe(headSlot)) self.statDefense += headSlot.defense;
    if (safe(bodySlot)) self.statDefense += bodySlot.defense;
    if (safe(legSlot))  self.statDefense += legSlot.defense;

    // Manually apply armor effects (damage, speed, crit, etc.)
    if (safe(headSlot)) headSlot.UpdateEquip(self);
    if (safe(bodySlot)) bodySlot.UpdateEquip(self);
    if (safe(legSlot))  legSlot.UpdateEquip(self);
});
