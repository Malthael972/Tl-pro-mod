const Player = new NativeClass("Terraria", "Player");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const vanitySlots = [self.armor[10], self.armor[11], self.armor[12]];

    for (const item of vanitySlots) {
        if (!item || item.type === 0) continue;

        // Add defense
        self.statDefense += item.defense || 0;

        // Manually apply key stats
        if (item.meleeSpeed) self.meleeSpeed += item.meleeSpeed;
        if (item.moveSpeed) self.moveSpeed += item.moveSpeed;
        if (item.maxRunSpeed) self.maxRunSpeed += item.maxRunSpeed;

        if (item.meleeDamage) self.meleeDamage += item.meleeDamage;
        if (item.rangedDamage) self.rangedDamage += item.rangedDamage;
        if (item.magicDamage) self.magicDamage += item.magicDamage;
        if (item.minionDamage) self.minionDamage += item.minionDamage;

        if (item.meleeCrit) self.meleeCrit += item.meleeCrit;
        if (item.rangedCrit) self.rangedCrit += item.rangedCrit;
        if (item.magicCrit) self.magicCrit += item.magicCrit;

        if (item.statManaMax2) self.statManaMax2 += item.statManaMax2;
        if (item.statLifeMax2) self.statLifeMax2 += item.statLifeMax2;
    }
});
