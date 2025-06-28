const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const headSlot = self.armor[10];  // Vanity head
    const bodySlot = self.armor[11];  // Vanity body
    const legSlot = self.armor[12];   // Vanity legs

    const vanityArmor = [headSlot, bodySlot, legSlot];

    for (const item of vanityArmor) {
        if (!item || !item.IsAir()) continue;

        // Add defense from vanity items
        self.statDefense += item.defense;

        // If the item has known stat boosts (manually extended below)
        self.statManaMax2 += item.statManaMax2 || 0;
        self.statLifeMax2 += item.statLifeMax2 || 0;
        self.statManaRegenBonus += item.manaRegenBonus || 0;

        self.meleeSpeed += item.meleeSpeed || 0;
        self.moveSpeed += item.moveSpeed || 0;
        self.maxRunSpeed += item.maxRunSpeed || 0;

        self.magicDamage += item.magicDamage || 0;
        self.meleeDamage += item.meleeDamage || 0;
        self.rangedDamage += item.rangedDamage || 0;
        self.minionDamage += item.minionDamage || 0;

        self.magicCrit += item.magicCrit || 0;
        self.meleeCrit += item.meleeCrit || 0;
        self.rangedCrit += item.rangedCrit || 0;
    }
});
