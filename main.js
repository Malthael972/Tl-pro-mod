const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const headSlot = self.armor[10];  // Vanity head
    const bodySlot = self.armor[11];  // Vanity body
    const legSlot = self.armor[12];   // Vanity legs

    // Avoid errors if one of the vanity slots is empty
    const safe = (item, stat) => item && item[stat] ? item[stat] : 0;

    self.statDefense += safe(headSlot, "defense") + safe(bodySlot, "defense") + safe(legSlot, "defense");
    self.meleeSpeed  += safe(headSlot, "meleeSpeed") + safe(bodySlot, "meleeSpeed") + safe(legSlot, "meleeSpeed");
    self.moveSpeed   += safe(headSlot, "moveSpeed") + safe(bodySlot, "moveSpeed") + safe(legSlot, "moveSpeed");
    self.maxRunSpeed += safe(headSlot, "maxRunSpeed") + safe(bodySlot, "maxRunSpeed") + safe(legSlot, "maxRunSpeed");
    self.magicDamage += safe(headSlot, "magicDamage") + safe(bodySlot, "magicDamage") + safe(legSlot, "magicDamage");
    self.meleeDamage += safe(headSlot, "meleeDamage") + safe(bodySlot, "meleeDamage") + safe(legSlot, "meleeDamage");
    self.rangedDamage += safe(headSlot, "rangedDamage") + safe(bodySlot, "rangedDamage") + safe(legSlot, "rangedDamage");
    self.minionDamage += safe(headSlot, "minionDamage") + safe(bodySlot, "minionDamage") + safe(legSlot, "minionDamage");
    self.magicCrit   += safe(headSlot, "magicCrit") + safe(bodySlot, "magicCrit") + safe(legSlot, "magicCrit");
    self.meleeCrit   += safe(headSlot, "meleeCrit") + safe(bodySlot, "meleeCrit") + safe(legSlot, "meleeCrit");
    self.rangedCrit  += safe(headSlot, "rangedCrit") + safe(bodySlot, "rangedCrit") + safe(legSlot, "rangedCrit");
});
